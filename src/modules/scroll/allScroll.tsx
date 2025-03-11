// export const scrollToAll = (scrollAll: string) => {
//   const all = document.getElementById(scrollAll);
//   if (all) {
//     all.scrollIntoView({ behavior: "smooth" });
//   }
// };
export const scrollToAll = (scrollAll: string) => {
  const targetElement = document.getElementById(scrollAll);
  if (!targetElement) return;

  const startPosition = window.scrollY;
  const targetPosition =
    targetElement.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  const duration = 3000;
  let startTime: number | null;

  const easeInOutQuart = (t: number) => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  const animation = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const scrollY = startPosition + distance * easeInOutQuart(progress);
    window.scrollTo(0, scrollY);

    progress < 1 && requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
