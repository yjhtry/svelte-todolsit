let id = 0
function *createUniqueId() {
  while (true)
    yield id++
}

export const idGenerator = createUniqueId()
