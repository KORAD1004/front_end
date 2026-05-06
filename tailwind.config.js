/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
        'pretendard-bold': ['Pretendard-bold'],
        'pretendard-semibold': ['Pretendard-semiBold'],
        'pretendard-medium': ['Pretendard-medium'],
        'pretendard-extrabold': ['Pretendard-extraBold'],
        pretendardv: ['PretendardV'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
