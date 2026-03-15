export type Course = {
    id : string
    title : string
    days : number
    image : string
    scheduledDate : Date
    availability : string
    category : string
    summary : string
    rating : number
}

export type CreateCourse = {
    id : string
        title : string
    days : number
   price: number
}