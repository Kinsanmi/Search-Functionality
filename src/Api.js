

export const AllEvent = [
    {
      id: "1",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334578/m6_ozwnmc.jpg",
      names: "BLACK PANTHER",
      genre: "ACTION",
      duration: "120 min"
    },
    {
      id: "3",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334573/coming8_ive8xf.jpg",
      names: "BLACK WINDOW",
      genre: "ACTION",
      duration: "120 min"
    },
    {
      id: "13",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334572/coming2_ntf3ov.jpg",
      names: "WARCRAFT",
      text: "THE BEGINNING",
      genre: "ACTION",
      duration: "120 min"
    },
    {
      id: "4",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334577/m7_k8oa7b.jpg",
      names: "THOR",
      genre: "ACTION",
      duration: "120 min"
    },
    {
      id: "6",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334572/post-6_o1ya10.jpg",
      names: "NO TIME TO DIE",
      genre: "ACTION",
      duration: "120 min"
    },
    {
      id: "8",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334573/post-9_qx1f2z.jpg",
      names: "WANDA VISION",
      genre: "ACTION",
      duration: "120 min"
    },
    {
      id: "21",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334572/post-5_rrvtej.jpg",
      names: "SUICIDE SQUAD",
      genre: "ACTION",
      duration: "120 min"
    },
    
    {
      id: "12",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334573/coming1_jzilez.jpg",
      names: "JOHNNY ENGLISH",
      genre: "ACTION",
      duration: "120 min"
    },

    {
      id: "19",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334578/m10_bk7aqc.jpg",
      names: "UNDERWORLD",
      genre: "ACTION",
      duration: "120 min"
    },
    

    
    {
      id: "15",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334575/m4_h733hv.jpg",
      names: "JOHN WICK",
      genre: "ACTION",
      duration: "120 min"
    },
    
    {
      id: "17",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334573/coming9_nyvvd0.jpg",
      names: "ANT-MAN",
      genre: "ACTION",
      duration: "120 min"
    },
    
    {
      id: "18",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334574/m5_fbc3wj.jpg",
      names: "AQUAMAN",
      genre: "ACTION",
      duration: "120 min"
    },
    {
      id: "16",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334577/coming10_xcmiy8.jpg",
      names: "GUARDIANS OF THE GALAXY",
      genre: "ACTION",
      duration: "120 min"
    },
    
    {
      id: "20",
      Image: "https://res.cloudinary.com/dkngsthge/image/upload/v1705334577/m9_btcdk2.jpg",
      names: "MORTAL ENGINES",
      genre: "ACTION",
      duration: "120 min"
    },
    

  ]


  export const fetchData = () =>{
    return new Promise((resolve, reject) => { 
      setTimeout(() => {
        resolve({allEvent: AllEvent})

        // reject({message: "Request Failed"});
      }, 7000);
     })
  }


