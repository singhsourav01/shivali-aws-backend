module.exports = {
  apps: [
    {
      name: "shivali-backend",
      script: "dist/index.cjs",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
