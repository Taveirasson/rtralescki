const useScrollToSection = () => {
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return scrollToSection;
  };
  
export default useScrollToSection;