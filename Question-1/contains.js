function contains(obj, val) {
    if (obj == null) {
      return false;
    }
    for (let key in obj) {
      if (
        obj[key] == val ||
        (typeof obj[key] == "object" && contains(obj[key], val))
      ) {
        return true;
      }
    }
    return false;
  }
  
  var nestedObject1 = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: "foo2",
            },
          },
        },
      },
    },
  };
  

  let hasIt1 = contains(nestedObject1, 44);
  let doesntHaveIt1 = contains(nestedObject1, "foo");
 
  
  console.log(hasIt1);
  console.log(doesntHaveIt1);