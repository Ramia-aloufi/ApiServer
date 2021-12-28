import express from 'express';
const router = express.Router();
var i = 0;
let bulkitList = [
    // {
    //     id:1,
    //     objective:"hi",
    //     created_at:"2021-12-27 15:15 am"
    // },
    // {
    //     id:1,
    //     objective:"hi",
    //     created_at:"2021-12-27 15:15 am"
    // },
    // {
    //     id:1,
    //     objective:"hi",
    //     created_at:"2021-12-27 15:15 am"
    // }
];

router.get('/',(req,res)=>{
    console.log(bulkitList)
    res.send(bulkitList)
});


router.post('/',(req,res)=>{
    bulkitList.push({
        id: i,
        created_at:Date(),
        ...req.body
        });
        console.log(req.body);
    res.send(bulkitList);
   i = i + 1;
});

router.get('/:id',(req,res)=>{
    const { id } = req.params;
    const found = bulkitList.find((bulkit)=>bulkit.id == id);
    res.send(found)
});

router.delete('/:id',(req,res)=>{
    const { id } = req.params;
    bulkitList = bulkitList.filter((bulkit)=>bulkit.id != id);
    res.send(bulkitList)
});

router.put('/:id',(req,res)=>{
    const { id } = req.params;
    const obj = bulkitList.find((bulkit)=>bulkit.id == id);
    const { objectiv } = req.body;
if(objectiv)obj.objectiv = objectiv;
    res.send(bulkitList)
});


export default router;
