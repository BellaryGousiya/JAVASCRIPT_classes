function outerFun()
{
    let a=45;

    function innerFun()
    {
        console.log(a);
        
    }
     return innerFun;
}
const res=outerFun();
res();