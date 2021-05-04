function fetchUser(id, ...args) {
  setTimeout(() => {
    console.log(`successfully fetched user with id ${id}`)
  }, 10000)
}

function getUser(userId, callback) {
  fetchUser(userId, (error, result) => {
    callback(error, result)
  })
}

getUser(1, (error, user) => {
  if (error) {
    console.error(error)
  }
  console.log(user)
})

try {
  const user = await getUser(1)
  console.log(user)
} catch (error) {
  console.error(error)
}
