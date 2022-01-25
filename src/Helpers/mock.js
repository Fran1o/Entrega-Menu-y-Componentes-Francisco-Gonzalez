
const productos=[{id:'1', categoria:'baterias', name:'Bateria Pearl', description:'Decade Maple Fusion 20 5c S/hard Brown Medidas:10 12 16 14 22 NO INCLUYE ATRILES NI PLATILLOS', price:'USD 1.500', foto:'' },
                {id:'2', categoria:'baterias', name:'Bateria Gretsch Catalina Ocean', description:' Catalina Rock Medidas: 13 16 14 22 Incluye Atriles No incluye platos.', price:'USD 2000', foto:''},
                {id:'3', categoria:'redoblantes', name:'Redoblante Mapex Black Panter', description:'Black Panther Sledgehammer 14x6.5', price:'USD 1.000', foto:''},
                {id:'4', categoria:'redoblantes', name:'Redoblante Mapex', description:'Mpx 14x8 Blac', price:'USD 2OO', foto:''},
                {id:'5', categoria:'platillosistanbul', name:'Ride Istanbul Agop', description:'Singature Ride 23 pulgadas Agr23', price:'USD 1200', foto:''},
                {id:'6', categoria:'platilloszildjian', name:'Crash Zildjian K', description:'Sweet Crash K Series K0704 18 pulgadas', price:'USD 800', foto:''},
            ];

export const getFetch = new Promise ((res, rej)=>{
    let condition = true
    if (condition){
        setTimeout (()=>{
            res(productos)
        }, 3000)
    }else{
        rej('404 not found')
    }

})
