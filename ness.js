class Ness {
  
  constructor () {
    this.arr = []
  }
  
  on (func) {
    this.onFunc = func
  }
  
  add (p) {
    this.arr.push(p)
    
    this.onFunc == undefined || this.onFunc('add', this.arr, p)

    const back = {
      add: (p) => {
        this.arr.push(p)
        
        this.onFunc == undefined || this.onFunc('add', this.arr, p)
      },
      before: ((i, p) => {
        this.arr.splice(i, 0, p)
        
        this.onFunc == undefined || this.onFunc('before', this.arr, p)
    
        return back
      }).bind(null, this.arr.length-1),
      after: ((i, p) => {
        this.arr.splice(i+1, 0, p)
        
        this.onFunc == undefined || this.onFunc('after', this.arr, p)

        return back
      }).bind(null, this.arr.length-1)
    }
    
    return back
  }
  
}

export default Ness
