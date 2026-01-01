<template>
  <div class="container">
    <div class="countdown">{{ formattedTime }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetTimestamp: null, // Seconds-precision timestamp from URL
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  computed: {
    formattedTime() {
      if (this.targetTimestamp === null) return 'Loading...';

      return `${this.days}d ${this.hours.toString().padStart(2, '0')}h ${this.minutes
        .toString()
        .padStart(2, '0')}m ${this.seconds.toString().padStart(2, '0')}s`;
    },
  },
  methods: {
    updateCountdown() {
      if (this.targetTimestamp === null) return;

      // Current time in seconds (no milliseconds)
      const nowSeconds = Math.floor(Date.now() / 1000);
      const distanceSeconds = this.targetTimestamp - nowSeconds;

      if (distanceSeconds <= 0) {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        return;
      }

      this.days = Math.floor(distanceSeconds / (60 * 60 * 24));
      this.hours = Math.floor((distanceSeconds % (60 * 60 * 24)) / (60 * 60));
      this.minutes = Math.floor((distanceSeconds % (60 * 60)) / 60);
      this.seconds = distanceSeconds % 60;
    },
    loadTargetFromQuery() {
      const params = new URLSearchParams(window.location.search);
      const timeParam = params.get('time');

      if (timeParam && !isNaN(timeParam)) {
        // Treat the provided `time` as Unix timestamp in SECONDS (no milliseconds)
        const seconds = Number(timeParam);
        this.targetTimestamp = seconds;
      } else {
        this.targetTimestamp = null;
      }
    },
  },
  created() {
    this.loadTargetFromQuery();
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.countdown {
  font-family: var(--font-mono);
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  letter-spacing: 0.1em;
}
</style>