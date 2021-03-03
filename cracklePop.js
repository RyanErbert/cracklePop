pString = "";
for(var i = 0; i < 100; i++){
    switch(i){
      case i %% 3 :
        pString = "Crackle" ;
      case i %% 5 :
        pString = pString + "Pop";
        break;
  };
    console.log(pString);
    pString = "";
};
