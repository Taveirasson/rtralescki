const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offSet = -50;
    const y = element.getBoundingClientRect().top + window.pageYOffset + offSet;

    window.scrollTo({top: y, behavior: 'smooth'});
  }
};
  
export default scrollToSection;