import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'username' and 'repository' with your GitHub username and repository name
export default defineConfig({
  plugins: [react()],
  base: '/midterm-quotation-app/', // Your repository name with slashes
});
