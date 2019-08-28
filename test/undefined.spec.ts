/**
 * Tests below test that when using a certain type, `ReferenceError` is thrown saying that the type is not defined. 
 */

describe(`Test that tests fail because of undefined references`, () => {
  const assertUndefinedType = (createObj: () => void, name: string) => {
    var throws = false 
      var error: Error | undefined 
      try {
        createObj()        
      } catch (e) {        
        error = e 
        throws = true         
      }
      expect(throws).toBeTruthy()
      expect(error).toBeDefined()
      expect(error).toEqual(new ReferenceError(`${name} is not defined`))
  }

  describe(`Each object is undefined`, () => {
    it(`Request is undefined`, () => {
      assertUndefinedType(() => {
        new Request("/path")
      }, "Request")
    })

    it(`Response is undefined`, () => {
      assertUndefinedType(() => {
        new Response(null, {status: 404})
      }, "Response")
    })

    it(`Headers is undefined`, () => {
      assertUndefinedType(() => {
        new Headers([])
      }, "Headers")
    })
  })
})