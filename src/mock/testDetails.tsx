
interface  TestDetailsListProps{
    test:string
    time:string
    isActive:boolean
    isCompleted:boolean
    
}
export const TestDetailsList: TestDetailsListProps[] = [
    {
        test :'Aptitude Round',
        time:'90 min',
        isActive:false,
        isCompleted:true
    },
    {
        test :'R&D Round',
        time:'90 min',
        isActive:true,
        isCompleted:false
    },
    {
        test :'Descriptive Round',
        time:'90 min',
        isActive:false,
        isCompleted:false
    },
    {
        test :'Coding Round',
        time:'90 min',
        isActive:false,
        isCompleted:false
    },
    {
        test :'Technical Round',
        time:'90 min',
        isActive:false,
        isCompleted:false
    }
]
