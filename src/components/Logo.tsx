import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: { box: 'w-10 h-10', svg: 'w-8 h-8' },
    md: { box: 'w-12 h-12', svg: 'w-10 h-10' },
    lg: { box: 'w-16 h-16', svg: 'w-14 h-14' }
  }[size];

  return (
    <div
      className={`${dimensions.box} rounded-2xl bg-white border border-amber-400/30 flex items-center justify-center shadow-xs shrink-0 overflow-hidden ${className}`}
    >
      {/* 
        Exact vector recreation of the user's uploaded yellow Islamic Quran emblem:
        - Outer pointed arch canopy with outward curving tips
        - Top crescent moon with vertical finial rod
        - Central mosque minaret dome with two arched windows
        - Hanging side lanterns (fanous) with vertical bead strings
        - Scattered 5-point stars around the dome and lanterns
        - Large open Holy Quran book spread open with tiered pages
        - Wooden X-shaped traditional Rehal (folding book stand) at the bottom
        Color: Vibrant golden yellow (#fbbf24 / #f59e0b)
      */}
      <svg
        viewBox="0 0 1000 1000"
        fill="#f59e0b"
        className={`${dimensions.svg} object-contain transition-transform`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 1. TOP CRESCENT MOON & FINIAL */}
        {/* Crescent Moon */}
        <path d="M500 0 C530 0 535 25 510 40 C480 30 480 15 500 0 Z" fill="#f59e0b" />
        <path
          d="M500 3 C528 5 532 30 508 42 C478 30 485 10 500 3 Z"
          fill="#f59e0b"
        />
        {/* Finial Rod */}
        <rect x="496" y="40" width="8" height="40" rx="3" fill="#f59e0b" />
        {/* Small finial beads */}
        <circle cx="500" cy="110" r="7" fill="#f59e0b" />
        <circle cx="500" cy="135" r="7" fill="#f59e0b" />
        <circle cx="500" cy="160" r="7" fill="#f59e0b" />
        <circle cx="500" cy="200" r="9" fill="#f59e0b" />

        {/* 2. THE GRAND POINTED ARCH CANOPY (Exact shape with curving arms) */}
        {/* Outer and Inner Arch Frame */}
        <path
          d="M500 70 
             L750 330 
             C870 450 1000 550 990 730 
             C970 660 910 570 820 480 
             C740 400 620 280 500 130 
             C380 280 260 400 180 480 
             C90 570 30 660 10 730 
             C0 550 130 450 250 330 
             Z"
          fill="#f59e0b"
        />

        {/* 3. CENTRAL MOSQUE DOME & MINARET */}
        {/* Dome Top & Onion arch */}
        <path
          d="M500 255 
             C470 290 435 320 435 365 
             L435 440 
             C435 480 470 500 500 500 
             C530 500 565 480 565 440 
             L565 365 
             C565 320 530 290 500 255 
             Z"
          fill="#f59e0b"
        />
        {/* Minaret base detail lines & cutouts */}
        <rect x="430" y="348" width="140" height="12" rx="4" fill="#f59e0b" />
        <rect x="430" y="438" width="140" height="12" rx="4" fill="#f59e0b" />
        <path d="M500 500 L500 522" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />

        {/* Dome Windows (White cutouts with pointed top) */}
        <path
          d="M455 385 
             L470 370 
             L485 385 
             L485 430 
             L455 430 
             Z"
          fill="#ffffff"
        />
        <path
          d="M515 385 
             L530 370 
             L545 385 
             L545 430 
             L515 430 
             Z"
          fill="#ffffff"
        />

        {/* 4. HANGING LANTERNS (FANOUS) & SUSPENSION CORDS */}
        {/* Left Lantern Cord */}
        <line x1="275" y1="320" x2="275" y2="360" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
        {/* Left Lantern Diamond/Hex Body */}
        <path
          d="M275 360 
             L310 400 
             L275 445 
             L240 400 
             Z"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <line x1="275" y1="445" x2="275" y2="470" stroke="#f59e0b" strokeWidth="5" strokeDasharray="3 3" />

        {/* Right Lantern Cord */}
        <line x1="730" y1="330" x2="730" y2="360" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
        {/* Right Lantern Diamond/Hex Body */}
        <path
          d="M730 360 
             L765 400 
             L730 445 
             L695 400 
             Z"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <line x1="730" y1="445" x2="730" y2="470" stroke="#f59e0b" strokeWidth="5" strokeDasharray="3 3" />

        {/* 5. STARS SCATTERED (5-point polygon stars) */}
        {/* Star 1: Upper Left near cord */}
        <polygon points="465,215 469,224 479,224 471,230 474,239 465,233 456,239 459,230 451,224 461,224" fill="#f59e0b" />
        {/* Star 2: Left large star */}
        <polygon points="360,285 366,303 385,303 370,314 376,332 360,320 344,332 350,314 335,303 354,303" fill="#f59e0b" />
        {/* Star 3: Upper Right small star */}
        <polygon points="605,280 609,289 619,289 611,295 614,304 605,298 596,304 599,295 591,289 601,289" fill="#f59e0b" />
        {/* Star 4: Center Right large star */}
        <polygon points="615,410 624,432 648,432 628,446 636,468 615,453 594,468 602,446 582,432 606,432" fill="#f59e0b" />
        {/* Star 5: Lower Left small star */}
        <polygon points="365,475 370,486 382,486 372,493 376,504 365,497 354,504 358,493 348,486 360,486" fill="#f59e0b" />
        {/* Star 6: Far Left mini star */}
        <polygon points="120,495 124,503 133,503 126,509 129,517 120,512 111,517 114,509 107,503 116,503" fill="#f59e0b" />
        {/* Star 7: Far Right mini star */}
        <polygon points="845,465 849,473 858,473 851,479 854,487 845,482 836,487 839,479 832,473 841,473" fill="#f59e0b" />

        {/* 6. OPEN HOLY QURAN (Tiered golden pages) */}
        {/* Left Quran Main Page Block */}
        <path
          d="M485 660 
             C410 600 320 540 280 528 
             L252 615 
             C300 635 390 690 485 765 
             Z"
          fill="#f59e0b"
        />
        {/* Left Quran Page Layer 2 */}
        <path
          d="M235 628 
             L205 638 
             C270 695 380 770 485 810 
             L485 780 
             C380 735 285 665 235 628 
             Z"
          fill="#f59e0b"
        />
        {/* Left Quran Outer Border Edge */}
        <path
          d="M205 515 
             L170 535 
             L128 642 
             C240 730 365 820 485 870 
             L485 845 
             C365 795 245 710 148 638 
             L185 545 
             Z"
          fill="#f59e0b"
        />

        {/* Right Quran Main Page Block */}
        <path
          d="M515 660 
             C590 600 680 540 720 528 
             L748 615 
             C700 635 610 690 515 765 
             Z"
          fill="#f59e0b"
        />
        {/* Right Quran Page Layer 2 */}
        <path
          d="M765 628 
             L795 638 
             C730 695 620 770 515 810 
             L515 780 
             C620 735 715 665 765 628 
             Z"
          fill="#f59e0b"
        />
        {/* Right Quran Outer Border Edge */}
        <path
          d="M795 515 
             L830 535 
             L872 642 
             C760 730 635 820 515 870 
             L515 845 
             C635 795 755 710 852 638 
             L815 545 
             Z"
          fill="#f59e0b"
        />

        {/* 7. TRADITIONAL WOODEN REHAL (X-STAND) AT BOTTOM */}
        {/* Left Leg Base */}
        <path
          d="M485 885 
             L360 970 
             L310 998 
             L425 910 
             L415 895 
             L380 905 
             L360 885 
             L420 860 
             Z"
          fill="#f59e0b"
        />
        <path
          d="M410 880 
             C375 870 360 900 375 925 
             C400 920 420 890 410 880 
             Z"
          fill="#ffffff"
        />

        {/* Right Leg Base */}
        <path
          d="M515 885 
             L640 970 
             L690 998 
             L575 910 
             L585 895 
             L620 905 
             L640 885 
             L580 860 
             Z"
          fill="#f59e0b"
        />
        <path
          d="M590 880 
             C625 870 640 900 625 925 
             C600 920 580 890 590 880 
             Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};
