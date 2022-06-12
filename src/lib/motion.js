export const heroMotion = {
  viewport: { once: true },
  initial: { y: -250 },
  whileInView: { y: 0 },
  transition: { type: "spring", stiffness: 100 },
};

export const homeCategoryItemMotion = (index) => ({
  viewport: { once: true },
  initial: { opacity: 0, y: index * 120 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.2 },
});

export const productListMotion = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.2 },
};

export const sideNavMotion = {
  key: "menu",
  initial: { opacity: 0, x: "-50%" },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
  exit: {
    x: -500,
    transition: { duration: 0.3 },
  },
};
