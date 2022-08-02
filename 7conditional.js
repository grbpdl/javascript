myCondition=true;
    if (myCondition) //if statement
    {
        console.log("It was true");
    }
    else if(myCondition)
    {
        console.log("It was true");
    }
    else
    {
        console.log("It was false");
    }

    //switch case
    function caseInSwitch(val)
    {
        let answer = "";
      switch(val)
      {
        case 1:
          answer="alpha";
          break;
        case 2:
          answer="beta";
          break;
        case 3:
          answer="gamma";
          break;
        case 4:
          answer="delta";
          break;
        default:
          answer="";
          break;
      }

        console.log(answer);
    }
      
      caseInSwitch(1);