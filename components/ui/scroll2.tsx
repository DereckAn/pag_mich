import React, { useState, useEffect, useRef, MouseEvent } from 'react';

export const MyComponent: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  let startX: number, startScrollLeft: number, timeoutId: NodeJS.Timeout;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const firstCardWidth = carousel?.querySelector(".card")?.offsetWidth || 0;
    const arrowBtns = wrapper?.querySelectorAll("i");
    const carouselChildrens = [...(carousel?.children || [])];

    let cardPerView = Math.round((carousel?.offsetWidth || 0) / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
      carousel?.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
      carousel?.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel?.classList.add("no-transition");
    carousel!.scrollLeft = carousel?.offsetWidth || 0;
    carousel?.classList.remove("no-transition");

    arrowBtns?.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel!.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e: MouseEvent) => {
      setIsDragging(true);
      carousel?.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel?.scrollLeft || 0;
    }

    const dragging = (e: MouseEvent) => {
      if(!isDragging) return;
      carousel!.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
      setIsDragging(false);
      carousel?.classList.remove("dragging");
    }

    const infiniteScroll = () => {
      if(carousel?.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * (carousel.offsetWidth || 0));
        carousel.classList.remove("no-transition");
      }
      else if(Math.ceil(carousel?.scrollLeft || 0) === carousel?.scrollWidth - (carousel?.offsetWidth || 0)) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth || 0;
        carousel.classList.remove("no-transition");
      }

      clearTimeout(timeoutId);
      if(!wrapper?.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
      if(window.innerWidth < 800 || !isAutoPlay) return;
      // Autoplay the carousel
    }

    carousel?.addEventListener("mousedown", dragStart);
    carousel?.addEventListener("mousemove", dragging);
    carousel?.addEventListener("mouseup", dragStop);
    carousel?.addEventListener("mouseleave", dragStop);
    carousel?.addEventListener("scroll", infiniteScroll);

    return () => {
      carousel?.removeEventListener("mousedown", dragStart);
      carousel?.removeEventListener("mousemove", dragging);
      carousel?.removeEventListener("mouseup", dragStop);
      carousel?.removeEventListener("mouseleave", dragStop);
      carousel?.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="carousel" ref={carouselRef}>
      </div>
    </div>
  );
};
