const APIkey = `b5b40b0bae7cc75a0761771ddd756bd9`;

let store  = {
    city: "London",
    name: 0,
    country: 0,
    visibility: 0,
    dtTxt: '',

};


    const API = `http://api.openweathermap.org/data/2.5/forecast?q=${store.city}&appid=${APIkey}`;

    const fetchData = async () =>{
        const resault = await fetch(API);
        const data = await resault.json();
        console.log(data);
        const { city :{name ,country },
                list: [{visibility, dt_txt : dtTxt}],
    } = data;
    const [, , , desiredObject] = data.list;
    console.log(desiredObject);
    
    
        // console.log(data,name , country, visibility, dtTxt);
        store = {
            ... store,
            name,
            country,
            visibility,
            dtTxt:dtTxt,
        };
        console.log(dtTxt);
        
    };
    fetchData();
