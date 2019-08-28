module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  transform: {    
    "^.+\\.tsx?$": "ts-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@src/(.*)": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1",
  },  
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["src/", "test/"],
  resetMocks: true,
}
