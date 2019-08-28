/**
 * Each test below shows that when the jest-fix-undefined module is imported into the test, everything works. You can use the object freely without any issues. 
 */

import "@src/index"

describe(`Test that tests can run successfully without missing references`, () => {
  describe(`Request`, () => {
    it(`test with Request can be run`, () => {
      let request = new Request("/path")

      expect(request.method).toBe("GET")
    })
  })

  describe(`Response`, () => {
    it(`test with Response can be run`, () => {
      let response = new Response(null, {status: 404})

      expect(response.status).toBe(404)
    })
  })

  describe(`Headers`, () => {
    it(`test with Headers can be run`, () => {
      let headers = new Headers([
        ["New-Header", "value"]
      ])      

      expect(headers.get("New-Header")).toBe("value")
    })
  })
})