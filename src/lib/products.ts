export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "hats" | "hoodies" | "t-shirts" | "polos" | "journals";
  image: string;
}

export const products: Product[] = [
  {
    id: "sacred-anchor-hoodie",
    name: "The Sacred Anchor Hoodie",
    description: "Heavyweight organic cotton in Deep Navy",
    price: 78,
    category: "hoodies",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYkDYT_ltl1lXSIvI5BdwCYr3dJqUPk72t8HgYtewdrJS9pKurkaGAXHNoQy4ahsPqMpreJYYpN3vPDCdhGjs4iDa5TTmKroYujkEv2hAkxrtCP1nqB7gJ5Qcd3_0GJFh81mmsSd6JbBCk9VKzyb1klvNGHsIGLvrKPhF4FzaMFwoglwzeRFEL6tPa5l3k0nD2reytKcLoWr-XMqRd0YfD6xIX0YSdJ4YZmllm2vZQiSSZkWaYWIEp-9LIPes0v9bM5JNuiaLBBk4",
  },
  {
    id: "knucklehead-cap",
    name: "Knucklehead Cap",
    description: "Terra-cotta brushed twill",
    price: 32,
    category: "hats",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUH21_8HyH7l4HFryFgfalJsSjk7GR_3d09A6nTNTeTIbG-dBg9v1-Xx51pVbtVoULSfifGugmhRVcZgjOEijCcl9E17YLMMK__6jTLSEOYRzqx8CbsWbA15NhfwIR-giTqZE9Gshm5Hp8NDpXYwHvuQhz-abGETfxRKGAIecTmcXBK8hdxBNvIY7DjVAr5HfDhl33FtOLpczSyvjYDWuXgAZ2QhWR7wPo5V3XqOQs6E5478rLHo_5XFZjCQwRPBZpGplncIJ3AJo",
  },
  {
    id: "foundation-tee",
    name: "Foundation Tee",
    description: "Stone White / Boxy Fit",
    price: 42,
    category: "t-shirts",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjZrG74ORnA4ml-AQ3JS-5vexeIijeXeNCz8pkEDzLKqQaWSLg5fGF4XVAkemy529mXWt3OiBcS7ghWH6_j3iuhAjvBNDv3wz4WMeh4clipSPmif1orf-JJdB0ZZRX4fw1PZTfMpf3ocw-FwmwkaZrNRSS-Tnwhl6jG7rIw4nbFWSY5y0FZw0VTXVcesEQmnEU7zJD2QYVUT5GTaVoyuGjinrXxTcRrf2QKzVOHa7Rgj-eM_Xr81AgT0BCtz6KXeT4YZd8AedcF54",
  },
  {
    id: "archive-polo",
    name: "The Archive Polo",
    description: "Fine knit cotton in Midnight",
    price: 64,
    category: "polos",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEoS3qkCM4kw_DcX-4vltIkPycpBOra9EjU2J2wPiiJTWQHCu75qpB_avCRBz7m-EQsMnzPk9OCmcxc5UzFB8zpwbw6Zhm376xzAPNzP5Mo-ix6aGyd9QEjiqwcHewToIKg2Y_dBLREWfCUm5qWUiDud7j7f3WpTjXRGZike6VOXQWX-1W2UUtXhbg8IjAIsWs-ZtRouXy8xdSIXKkgmPeXvpNQMucJSC1ztxER5GcntAiSLWRy_qgnnBgVGZyuOsoN6FAV0XBaCg",
  },
  {
    id: "grace-mistakes-hoodie",
    name: "Grace > Mistakes Hoodie",
    description: "Heavyweight warmth for long nights of wrestling with questions",
    price: 64,
    category: "hoodies",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6xmqFnnIlSNxh-LzlEhcxSMo9a78GOXfDLyaAyylxhm4C5ghnSKlbr7PBqxj1x2kb4XBwfVrjJGFS2rqc4nJrqqaf3MYKtl04MgTcWM5fwl0dYE_Y__onhK9_W9tWM7NjywttKgb60BKXrJEr_lfPizaRH1HfcIT166uG4lynkSxwEwInVDa3pvuehKhSSdoHOWvc3fxWm3rkorLu4RSALHXggpMhlFqmIrxQLkDM0uzPq3PaQ7gX1BTAahf9XZ3TCuqt5SUBDwc",
  },
  {
    id: "heritage-dad-hat",
    name: "Heritage Dad Hat",
    description: "Worn-in comfort for the weary traveler and the honest stumbler",
    price: 28,
    category: "hats",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXTMJ3_4gK9WdLx8KtKD9H0j-pIdO9FM9IcrhPwoUoLfNqFWJXzXOTbS7ENe3looFMbBLl73oFL7f0OuBW3aT2UPVe3crtLCP_jh3y3QBJKO3wvq9ya8aAckBJ5I2AdUC6gp-rceH64IQRnBjAiPar5rkGNSzCLCdeizfyOfgcNi_B3LfbH8CN9o-l77AouUdoMLysCSR4Hh8fejA80rfRxUKBvMYs62P6JbIE4TEGT0kb43D-jbvGg_jYL_233H_mFgy0dNJxoa8",
  },
  {
    id: "scribblers-journal",
    name: "The Scribbler's Journal",
    description: "For honest thoughts, messy prayers, and the occasional grocery list",
    price: 42,
    category: "journals",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8VqC-D2I_5HqmtOMB1-ksKg5UJJMRadKrF4WIj9UfD7BOngGA7p7atzSdA8uE4kMyAJ59ZXwGo0RKpUTEnzvUBZj5xi4Ya1nyvegltk1NB_R7oMl9yVePGGD_fi7cuODGj1C-2Wg9GzlO8vgEZTsoCenFzkuVczjSQR2_5vSF3sTRRjjiulRDYVcsIobCW9TzZh30-0cACrmf4R1ab3uu8KsLO89bF7JpNrGZfycT8SFHsmVib2sN7rHmFEEllCYfyPZueUPzUCc",
  },
];

export const categories = ["all", "hats", "hoodies", "t-shirts", "polos", "journals"] as const;
export type Category = (typeof categories)[number];
