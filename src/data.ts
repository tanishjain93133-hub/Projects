export interface ProjectImageItem {
  id: string;
  src: string;
  alt: string;
  category: "Residential" | "Commercial";
  description: string;
  gallery?: string[];
  specs: {
    location: string;
    area: string;
    year: string;
    architect: string;
    materials: string[];
  };
}

export const PROJECTS_IMAGES: ProjectImageItem[] = [
  {
    id: "comm-dsa-04",
    src: "https://lh3.googleusercontent.com/d/1JHPhEFvokVoMViai2JRY2C97I_wcZ5Ap",
    alt: "A & A Wealth",
    category: "Commercial",
    description: "A & A Wealth is a modern commercial office space designed to create a professional yet comfortable working environment. The project features elegant interiors, premium materials, warm lighting, and smart space planning that together give the office a sophisticated and welcoming feel.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1HitK9MepXCJqmoMaisI3_pUTzvYJZA00",
      "https://lh3.googleusercontent.com/d/1JHPhEFvokVoMViai2JRY2C97I_wcZ5Ap",
      "https://lh3.googleusercontent.com/d/1QD35D6_0pT2a_j9vYk2IO5-BhrRbXrwc",
      "https://lh3.googleusercontent.com/d/1eKA1CHzewmgRmwNRWG_oI2s_fKYrSMDL",
      "https://lh3.googleusercontent.com/d/1Rg-tzflx4mY1yefb608u77YANq5xeFUk",
      "https://lh3.googleusercontent.com/d/1gtqBoeZxA4aXSYVrnm_ldNO2G0aOFjhJ",
      "https://lh3.googleusercontent.com/d/16UwjT1SSzMIS4bVDiB8ZcntJuJcSwtrQ",
      "https://lh3.googleusercontent.com/d/1O5txCTxKc9EoSV62XE9b09ds8eZtQ61r"
    ],
    specs: {
      location: "Financial District, Milan",
      area: "4,200 SQ. FT.",
      year: "2025",
      architect: "DSA Commerce Studio",
      materials: ["Absolute Gilded Brass", "Travertine", "Fluted Smoked Glass"]
    }
  },
  {
    id: "res-dsa-02",
    src: "https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I",
    alt: "The White House",
    category: "Residential",
    description: "The White House is a modern architectural masterpiece featuring clean lines, minimal aesthetics, and functional design tailored for luxury living.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1XibxVzxzjgvmI85XDUywtUpJTUus7bzM",
      "https://lh3.googleusercontent.com/d/1QLoxtToMtlmg-ipEwkZmSlumXOUQN8xl",
      "https://lh3.googleusercontent.com/d/1H6q1qNWQHacRX-hMgou8B1FiWhRQChA9",
      "https://lh3.googleusercontent.com/d/18_7CMiYHoSYBhdpz3wpWKfoQkGwhUvof",
      "https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I",
      "https://lh3.googleusercontent.com/d/1iQmVJffURWt36pHSEUDtBVea6DohwNui",
      "https://lh3.googleusercontent.com/d/1ougaUOsunQBGofdyvOBG9Khbgdk0vqUv",
      "https://lh3.googleusercontent.com/d/1EsMLe08jkprzx3ZDo1GAcmzZH3N-Frpp",
      "https://lh3.googleusercontent.com/d/18ZAqVZ_dUvWc_Ty2yITX2JVYMpQl0C96",
      "https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE",
      "https://lh3.googleusercontent.com/d/1YyyJgCvAd-Q9_dcwhd7A7YLY_MGaTjuF"
    ],
    specs: {
      location: "Beverly Hills, USA",
      area: "12,400 SQ. FT.",
      year: "2024",
      architect: "DSA Residential Villa Group",
      materials: ["Poured Solid Chalk Concrete", "White Thassos Marble", "Extra-clear Optiwhite Glazing"]
    }
  },
  {
    id: "res-dsa-10",
    src: "https://lh3.googleusercontent.com/d/1T8U7brn4ddyC2AvlBXLJe_Q6lR9r8gEB",
    alt: "Serene Sanctuary",
    category: "Residential",
    description: "Serene Sanctuary is an elegant luxury residential interior showcasing magnificent spatial design, sophisticated bespoke fittings, warm lighting, and a modern minimal layout that provides the ultimate cozy and premium comfort.",
    gallery: [
      "https://lh3.googleusercontent.com/d/16DTIb9D_Uc7F_EZNe2bUHR8Ho1yNrEia",
      "https://lh3.googleusercontent.com/d/1F3pCKJ3AoRscrUBLCp7lq3CuVY6H9qgW",
      "https://lh3.googleusercontent.com/d/1T8U7brn4ddyC2AvlBXLJe_Q6lR9r8gEB",
      "https://lh3.googleusercontent.com/d/13nXjHCUV7Xwp08vBD9hlm7_OuAj5ojeA",
      "https://lh3.googleusercontent.com/d/1-z9QVSJHey4ihF6Pwnj26-KEnj-wKPUV",
      "https://lh3.googleusercontent.com/d/1kB8bKqSplggAku-hV9hXCH1--RAFnbxE",
      "https://lh3.googleusercontent.com/d/18SLksv2YuecX-2m5uf_0RjLZhSrBaF7P",
      "https://lh3.googleusercontent.com/d/1NwhwZ0nGjvRJsBdTN4cdislcgS9PApia",
      "https://lh3.googleusercontent.com/d/1_2JrbLu7tQ1Un6V5mZ5BdyDyF6LeS0cY",
      "https://lh3.googleusercontent.com/d/1fRywdtBR8KPW3elUsh2gVq1DDGUKaCZO"
    ],
    specs: {
      location: "Kyoto Outskirts, Japan",
      area: "6,800 SQ. FT.",
      year: "2025",
      architect: "DSA Kyoto Branch",
      materials: ["Hinoki Cedar Timber", "Honed Charcoal Limestone", "Washi Paper Panels"]
    }
  },
  {
    id: "comm-dsa-06",
    src: "https://lh3.googleusercontent.com/d/1w2v0x_u3_eykFh4KxJHv9UdmK4AL_PrY",
    alt: "iFlair",
    category: "Commercial",
    description: "iFlair is a modern commercial office space designed with clean interiors, smart workspace planning, and contemporary aesthetics to create a comfortable and productive working environment.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1N8Rh46dRnicb2zSSXZwqrSumYsCm-up9",
      "https://lh3.googleusercontent.com/d/1Wi0ySgvW2nXAkjt9VZO_142AScdkhoe5",
      "https://lh3.googleusercontent.com/d/1ZfjIAL296LD5uhCuifOGUUhAAFEkFWoB",
      "https://lh3.googleusercontent.com/d/16eaYwux7n_VlwXTQR_fu8tskpw3jWwnD",
      "https://lh3.googleusercontent.com/d/1cCkNNGVuquVa7qJsIwU3DaB3HmLywvn5",
      "https://lh3.googleusercontent.com/d/11TbTFOKmmDw5GgkEcUPklEkQgWW9u06Z",
      "https://lh3.googleusercontent.com/d/1iOJPcTZWDkzZBs0jb1jNwOrGRley_zeQ",
      "https://lh3.googleusercontent.com/d/1w2v0x_u3_eykFh4KxJHv9UdmK4AL_PrY"
    ],
    specs: {
      location: "Silicon Valley, USA",
      area: "15,500 SQ. FT.",
      year: "2024",
      architect: "DSA Corporate HQ Division",
      materials: ["Brushed Blue Titanium", "Cast Micro-top Plaster", "Acoustic Soft Felt Elements"]
    }
  },
  {
    id: "comm-dsa-01",
    src: "https://lh3.googleusercontent.com/d/1yNArVeNijD0ZdMs_b6gVzA4cDGZQrNDa",
    alt: "Achira Diamond & Fashion",
    category: "Commercial",
    description: "Achira Diamond & Fashion is a premium boutique commercial project designed with a focus on sophisticated interiors, efficient layout, and modern lighting to create a professional business environment.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1yNArVeNijD0ZdMs_b6gVzA4cDGZQrNDa",
      "https://lh3.googleusercontent.com/d/1vvr64lVDD2ffQrI-TCAB2SEE77dWXXw6",
      "https://lh3.googleusercontent.com/d/1C7Bw37-kUIkM7oQJrlKeGKbZMD0yfRr0",
      "https://lh3.googleusercontent.com/d/1o4AABMh5Ic8IFyfppdwKzNWguVJnMw9U",
      "https://lh3.googleusercontent.com/d/1ggEm1IJLa8pvLEOiE6WIjwW8GQWwvRte",
      "https://lh3.googleusercontent.com/d/1Y3QaodVTdx_ksxe5y-mfymZj7Wvi7S5A",
      "https://lh3.googleusercontent.com/d/1Jm0ZUy_oREO0t6ttfPWcnmf5jSZuWpvF",
      "https://lh3.googleusercontent.com/d/1Eqvv_Ja3NOyxumvWayVBr7tSOr-IWOfp",
      "https://lh3.googleusercontent.com/d/1u1DkDx7zmYAYkT-AcmXjNwfO2t9oTB0G"
    ],
    specs: {
      location: "Antwerp, Belgium",
      area: "3,100 SQ. FT.",
      year: "2025",
      architect: "DSA High-End Retail Unit",
      materials: ["Velvet Obsidian Plaster", "Gilded Bronze Rails", "Laser-cut Onyx Displays"]
    }
  },
  {
    id: "res-dsa-04",
    src: "https://lh3.googleusercontent.com/d/1ATpVoCZUuKvgssfy4TcClIPCA6v8K3yz",
    alt: "JS House",
    category: "Residential",
    description: "JS House is a modern residential interior designed with warm textures, elegant furniture, and a clean contemporary layout to create a comfortable and inviting living experience.",
    gallery: [
      "https://lh3.googleusercontent.com/d/10BiKxkWetqJZyJ6PSZ2caGL-ZfxNBFqR",
      "https://lh3.googleusercontent.com/d/1ATpVoCZUuKvgssfy4TcClIPCA6v8K3yz",
      "https://lh3.googleusercontent.com/d/1kBeDniq8YscJ_Y9hrfeT9AmRP1-FFg5b",
      "https://lh3.googleusercontent.com/d/1mWy1CeWH5709dOqETSpugRmcbvZPMn84",
      "https://lh3.googleusercontent.com/d/1aCHCMZzRq3yWKp1t2lsYUQoB8VAD9uTf",
      "https://lh3.googleusercontent.com/d/1qyYGAq-QLx_c7RdlVOSRNkC5VI3Tg_xr",
      "https://lh3.googleusercontent.com/d/1WTeS-ivEHtUgCizv4QWCr-0OMg4-h8gT",
      "https://lh3.googleusercontent.com/d/13Q7hqay2vgWNX89s3LREPa6-6xR39cXr",
      "https://lh3.googleusercontent.com/d/10sHG9fUvsCcHyVbG2_bwNBtsMT9LXrnE"
    ],
    specs: {
      location: "Gold Coast, Australia",
      area: "7,500 SQ. FT.",
      year: "2024",
      architect: "DSA Sydney Studio",
      materials: ["Brushed Spotted Gum Teak", "Calacatta Gold Marble", "Matte Steel Frames"]
    }
  },
  {
    id: "comm-dsa-02",
    src: "https://lh3.googleusercontent.com/d/1_BEEwFeRswSl-qmhg6cGM3CSVZBNxitc",
    alt: "JD Office",
    category: "Commercial",
    description: "A premium JD office designed with elegant interiors, warm lighting, and modern detailing to create a professional yet luxurious workspace. The space combines comfort, sophistication, and functionality for a refined office experience.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1BFzYFW7w2D_fSzHxGGXC0jP_9NLJ1k0O",
      "https://lh3.googleusercontent.com/d/1O52HcsPN87XM4fbK7Geh4MXe4Gd49je-",
      "https://lh3.googleusercontent.com/d/1_BEEwFeRswSl-qmhg6cGM3CSVZBNxitc",
      "https://lh3.googleusercontent.com/d/1CkRmnq0K-ewBzy-uuVEjirTl0h6cE7BW",
      "https://lh3.googleusercontent.com/d/12tqE2lUkckZfNKtOcibIy0UisiJcfyT1",
      "https://lh3.googleusercontent.com/d/1kMnsmwDnmA2vzMPlAAbgOr9qj2cimKGI",
      "https://lh3.googleusercontent.com/d/1kVIA1rr2w9edYSVfXK5zbkjj_flhmByK",
      "https://lh3.googleusercontent.com/d/1Y7u30gzvsxNrgdhMvs6XhsqzlEjpHY2i"
    ],
    specs: {
      location: "Mayfair, London",
      area: "5,800 SQ. FT.",
      year: "2025",
      architect: "DSA UK Branch",
      materials: ["Fumed English Oak", "Portoro Gold Marble", "Suede Wall Paneling"]
    }
  },
  {
    id: "res-dsa-06",
    src: "https://lh3.googleusercontent.com/d/1XPMjgJV5cm01cNRibpYxvZbUmkUY6NV4",
    alt: "DHS House",
    category: "Residential",
    description: "DHS House is a modern residential interior designed with clean lines, premium materials, and warm lighting to create a sophisticated and welcoming home environment.",
    gallery: [
      "https://lh3.googleusercontent.com/d/14h7b7pMXC-VBaqBlaluV84FMPmJtgsv-",
      "https://lh3.googleusercontent.com/d/1xkHElGhMv4jn-CIUb44MF-EULoI7tVN9",
      "https://lh3.googleusercontent.com/d/18wghnSqoU4DceWGwb3OrGqMIb-bCrx_4",
      "https://lh3.googleusercontent.com/d/1XPMjgJV5cm01cNRibpYxvZbUmkUY6NV4",
      "https://lh3.googleusercontent.com/d/1qlBFCwSljLD0BHKzzcQLvhTz6CMEQ6vK",
      "https://lh3.googleusercontent.com/d/1N84kFIXt8RgGocPWEwGaF7Ei2E6TcQCl",
      "https://lh3.googleusercontent.com/d/1g-gFVfcAh7GKfJKGu8Ho_mxnW_KBXBRq",
      "https://lh3.googleusercontent.com/d/1YKi3G5pqqWpgkGck8vVD5lvCX6foAyHp",
      "https://lh3.googleusercontent.com/d/1mIw6i3D6_sdoSUAqZwnQvc1P5M_R8t35",
      "https://lh3.googleusercontent.com/d/1bVVYnAZbYa0_9IOXRNHIvFMm6VlS8zXj",
      "https://lh3.googleusercontent.com/d/1xx9p6jmi5997vpWR9EBJmH1VS_ab2r6S"
    ],
    specs: {
      location: "Hamptons, New York",
      area: "9,600 SQ. FT.",
      year: "2025",
      architect: "DSA NYC Office",
      materials: ["White Rift Oak Wood", "Nero Marquina Marble", "Danish Wool Fabrics"]
    }
  },
  {
    id: "res-dsa-01",
    src: "https://lh3.googleusercontent.com/d/1YRacy3CF6ZIjb3PAPMFWdHpSqILycUCs",
    alt: "Subtle Sanctuary",
    category: "Residential",
    description: "This home interior combines simplicity, functionality, and modern design with soft color tones, spacious layouts, and refined finishes for comfortable everyday living.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1WC-BXDJSfS3GKFozaBavmZkHfrGeWE8k",
      "https://lh3.googleusercontent.com/d/1YRacy3CF6ZIjb3PAPMFWdHpSqILycUCs",
      "https://lh3.googleusercontent.com/d/1cb-sHqV2zBhZm-q_xzutywoL5Mk38mOx",
      "https://lh3.googleusercontent.com/d/1QO4RG4r3lLjHg8LSxlGJgsL27ndNJQDR",
      "https://lh3.googleusercontent.com/d/1BARiFPF1WqG6Gn9NG_aY6jQQ3LLCGsNV",
      "https://lh3.googleusercontent.com/d/1VjfTyEtMHhfE8ISVmigmsRXnT6hq5Kys",
      "https://lh3.googleusercontent.com/d/1-xZFO72fjLUBvo95ycdGYB5uHwjiJO9H",
      "https://lh3.googleusercontent.com/d/1BNBKIOSfwDEegRlGUvlblYBZr-DZIuWB",
      "https://lh3.googleusercontent.com/d/1JvdV2Oq0F3D9CZThPXoueFh-5jyeB0_P"
    ],
    specs: {
      location: "Trastevere, Milan",
      area: "2,200 SQ. FT.",
      year: "2024",
      architect: "DSA Italy Residential Studio",
      materials: ["Venetian Terrazzo", "Raw French Linens", "Powder-coated Soft Alum"]
    }
  },
  {
    id: "comm-dsa-05",
    src: "https://lh3.googleusercontent.com/d/1bQaYUlnqM_dPlHGV4XSVuWHgsiwWkvKJ",
    alt: "Safal",
    category: "Commercial",
    description: "Safal is a modern commercial project designed with efficient space planning and premium detailing to create a professional business environment.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1bQaYUlnqM_dPlHGV4XSVuWHgsiwWkvKJ",
      "https://lh3.googleusercontent.com/d/1i2Yqp-lSj_-Jjv7UUTPNFJDn0OhmvOr2",
      "https://lh3.googleusercontent.com/d/1n1BRt7ypqRy_2DlVe1vLwKxtfrSIOAor",
      "https://lh3.googleusercontent.com/d/1jx9ikwitul59OHtWCKjXauAn8yuHGl9D",
      "https://lh3.googleusercontent.com/d/1eCEPROlLE1VhRxUILd0_nU5a6H64Dafv",
      "https://lh3.googleusercontent.com/d/1lD3u17YibjQIBIiRWVuiSFOPZIB58mCa",
      "https://lh3.googleusercontent.com/d/1RtXXuGl-Y2yJ1L9mskY3IU5xL-e07l1I",
      "https://lh3.googleusercontent.com/d/1vwNtGPDkZXVNEBl7TLENW0tehdrUN8ht",
      "https://lh3.googleusercontent.com/d/1x4dXgc6hRFY3orI353oZn6N5aqjmkWRt"
    ],
    specs: {
      location: "Zurich, Switzerland",
      area: "8,200 SQ. FT.",
      year: "2023",
      architect: "DSA Zurich Office",
      materials: ["Alpine Pine Structural Pillars", "Brushed Zinc Plating", "Cast Terrazzo Floor"]
    }
  },
  {
    id: "res-dsa-08",
    src: "https://lh3.googleusercontent.com/d/1fQxUcOX6Xya8S1QgM-SEPknvST3Z-XPV",
    alt: "Anchor House",
    category: "Residential",
    description: "Anchor House is a modern residential interior designed with warm tones, elegant wall detailing, and comfortable seating to create a calm and welcoming living space.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1jyyq5qsWmffsEPw3XTZ3n0zscrWFS9zh",
      "https://lh3.googleusercontent.com/d/1N-2KEYobllj08RJwrnPILbo4LqfQX3qZ",
      "https://lh3.googleusercontent.com/d/1fQxUcOX6Xya8S1QgM-SEPknvST3Z-XPV",
      "https://lh3.googleusercontent.com/d/1UX7UD9LYciKhOU1lZAFGJhXZqTU9ZHhj",
      "https://lh3.googleusercontent.com/d/1u1nBzdpWoc4yf0rsy9OzePYANYPfpwOn",
      "https://lh3.googleusercontent.com/d/1ybviARSsIUzcw9PBQshjJWhgT7pX-fKj",
      "https://lh3.googleusercontent.com/d/1RTuBOAay5eORqBGCF75beMzxvFP9oVVA",
      "https://lh3.googleusercontent.com/d/1f9c0oNatpygcipVjuBuTEn6JukHXPiXT",
      "https://lh3.googleusercontent.com/d/1Ky7LbQVVv1HY7zykjsWSOg-6DEA67f3W"
    ],
    specs: {
      location: "Cape Town, South Africa",
      area: "11,500 SQ. FT.",
      year: "2024",
      architect: "DSA Cape Town Studio",
      materials: ["Sandblasted local Granites", "Smoked Walnut Wood", "Raw Brass Cast Joints"]
    }
  },
  {
    id: "res-dsa-07",
    src: "https://lh3.googleusercontent.com/d/1L7tYlf_OOkys-2kNAs6c6BDGdyxthjgS",
    alt: "CP House",
    category: "Residential",
    description: "CP House home interior combines simplicity and elegance through minimal design, soft color tones, and smart space planning for a modern everyday lifestyle.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1-XK2PeqEicXTRsxfKrIE-5xmBX_MXFvt",
      "https://lh3.googleusercontent.com/d/13T307RnsS1YhLREczMaA3LxGwzKPGd99",
      "https://lh3.googleusercontent.com/d/1L7tYlf_OOkys-2kNAs6c6BDGdyxthjgS",
      "https://lh3.googleusercontent.com/d/1Tzq0ooCQnYLh-F6ns11Wfy1QK7K3W0jh",
      "https://lh3.googleusercontent.com/d/1OlTdX7oAFnvHokByvAo7CDRtG3Ev0jKh",
      "https://lh3.googleusercontent.com/d/1M7c0BZg5Nbhje6pCXcx6ArpwXfzrfpW8",
      "https://lh3.googleusercontent.com/d/1LIvIFzb6MjxslW3Cn78ocU-0FcZqJflW",
      "https://lh3.googleusercontent.com/d/11XftRsAgmFH5D7qMo63aC_DJqsgxkg8W",
      "https://lh3.googleusercontent.com/d/1Ru7DZbc773GZXuWnQv2_v5USMbOhiagQ",
      "https://lh3.googleusercontent.com/d/1WcsfUWRrmZ3_KCXMIssJEjm0p6WzBCld",
      "https://lh3.googleusercontent.com/d/1_dQa9-W2cs1dPXmMbnpArSnl-DG6sIlb"
    ],
    specs: {
      location: "Ojai, California",
      area: "4,600 SQ. FT.",
      year: "2025",
      architect: "DSA LA Signature Team",
      materials: ["Earthy Rammed Clay Walls", "Hand-oiled Cedarwood", "Oxidized Copper Trim"]
    }
  },
  {
    id: "res-dsa-05",
    src: "https://lh3.googleusercontent.com/d/1QtyrH4BL03_19HDNi4U5L8jdjWxbGmqG",
    alt: "JD Bedroom",
    category: "Residential",
    description: "Designed with a balance of luxury and comfort, this JD Bedroom offers modern interiors, rich textures, and a peaceful ambiance perfect for everyday relaxation.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1QtyrH4BL03_19HDNi4U5L8jdjWxbGmqG",
      "https://lh3.googleusercontent.com/d/1UlOsOlkAnM_Z-ohufO0QsFR1gQ7NzcnK",
      "https://lh3.googleusercontent.com/d/1GTD1Ig-eWLW41JgPIFW94QHH3sBOX6gb",
      "https://lh3.googleusercontent.com/d/11XiSS1qKDUtcl2-J1PhJ_UzQQ2eniFJP",
      "https://lh3.googleusercontent.com/d/1_WQe69FYXc7h9LienyBKK-gT7t7RPEiT",
      "https://lh3.googleusercontent.com/d/1OIqQK1dHsNWH90MLsNi_TgL24y-qD-67",
      "https://lh3.googleusercontent.com/d/17DcOSeL0NDn-RTmQu1UJs7FuquZ1hGkl",
      "https://lh3.googleusercontent.com/d/1zLZcMS7ehDmOXqZ3xftn68HSZIpPf-eG",
      "https://lh3.googleusercontent.com/d/1zNL7CP90IA229Yj6BeTWvK_Su_mRzrRj"
    ],
    specs: {
      location: "Monaco Shore, France",
      area: "1,800 SQ. FT.",
      year: "2025",
      architect: "DSA France Branch",
      materials: ["Silk Wall Coverings", "Brushed Bronze Fixtures", "Bespoke Onyx Bed Platform"]
    }
  },
  {
    id: "res-dsa-09",
    src: "https://lh3.googleusercontent.com/d/1FpP771cL8vy2eMZZwTwtBGFve-Ip_sGU",
    alt: "Shela House",
    category: "Residential",
    description: "Shela House is a modern residential interior designed with clean lines, warm lighting, and elegant finishes that create a calm and welcoming living experience.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1v6qalvsM3Qea36VXgliizpmmhqogNXId",
      "https://lh3.googleusercontent.com/d/1A7n2KoNaNadZKVmfg8rAfJLm45iip4Ki",
      "https://lh3.googleusercontent.com/d/1FpP771cL8vy2eMZZwTwtBGFve-Ip_sGU",
      "https://lh3.googleusercontent.com/d/1egyW-7Pk2mNGz2x_Yew2TvgZsTzTZhye",
      "https://lh3.googleusercontent.com/d/1lSfBE5V_CdMKRaEKH7K6WcJvOPpxPorW",
      "https://lh3.googleusercontent.com/d/1uJkc_WYTa2QKKj2wXn2Ru6ZAixQQ1dHP",
      "https://lh3.googleusercontent.com/d/1CwpouFmp3RkObvO8v0kStEZr5Qho1upO",
      "https://lh3.googleusercontent.com/d/1VmORiXXnSwLwAMa6ZFZNUyFSeODRuJvZ",
      "https://lh3.googleusercontent.com/d/1UfmiDAau64UhaDRwp63ecE7kzN41Ha-F"
    ],
    specs: {
      location: "Vancouver, Canada",
      area: "8,900 SQ. FT.",
      year: "2024",
      architect: "DSA Vancouver Division",
      materials: ["Douglas Fir Structural Beams", "Basalt Stone Tile", "High-exposure Glass Slabs"]
    }
  },
  {
    id: "comm-dsa-07",
    src: "https://lh3.googleusercontent.com/d/10bqHIbfF1VJqrGk1I_iC9AyLh_aKscph",
    alt: "Shlip Aaron",
    category: "Commercial",
    description: "Shlip Aaron is a premium commercial office space featuring state-of-the-art office interiors, modern materials, sophisticated lighting designs, and highly functional workspace planning.",
    gallery: [
      "https://lh3.googleusercontent.com/d/10bqHIbfF1VJqrGk1I_iC9AyLh_aKscph",
      "https://lh3.googleusercontent.com/d/1W3WQQZozxeLqmqfLGkhsrE2YFcShJycD",
      "https://lh3.googleusercontent.com/d/1hLLKbRkEReJrsKZTUt-WcNRZ-2jKmJXu",
      "https://lh3.googleusercontent.com/d/1nCDhbW97MEx7Teo-E8-0FM74rds5iXr6",
      "https://lh3.googleusercontent.com/d/1EBDT9KSQ0tVHiK9YAPSf2V41Rkbmk_nV",
      "https://lh3.googleusercontent.com/d/12vmmKtDJg-KxJPSbW3wTTg8gOxsrMFwa",
      "https://lh3.googleusercontent.com/d/1sN2oH3O1ZuOl6CPssgOQXNVWE-gAe6Yf",
      "https://lh3.googleusercontent.com/d/1f3UEQQ1VViht-LPMzcJ1YR4XnJe3FEM1",
      "https://lh3.googleusercontent.com/d/1JB_YIBJWi0WTA9orjsZ7CkZ4idWl_czY"
    ],
    specs: {
      location: "Stockholm, Sweden",
      area: "21,000 SQ. FT.",
      year: "2025",
      architect: "DSA Scandinavian Studio",
      materials: ["Acoustic Timber Micro-slats", "Zero-grade Recycled Steel", "Nordic White Ash"]
    }
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "t1",
    quote: "DSA's premium grasp of space is absolutely pristine. Each office has a professional vibe coupled with incredible material integrity.",
    author: "Elena Rostov",
    role: "Collector & Devotee",
    project: "iFlair Commercial Client"
  }
];
