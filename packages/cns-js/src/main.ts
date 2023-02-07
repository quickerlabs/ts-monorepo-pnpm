export const delayMillis = (delayMs:number):Promise<void> => new Promise((resolve)=>setTimeout(resolve,delayMs))

export const greet = (name:string):string => `Hi,hei ${name}`

export const foo = async ():Promise<boolean> =>{
    console.log(greet('CNS'))

    await delayMillis(2000)
    return true
}
