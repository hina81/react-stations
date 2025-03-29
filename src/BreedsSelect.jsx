// @ts-check

export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  return (
    <>
      <select
        value={selectedBreed}
        onChange={e => setSelectedBreed(e.target.value)}
      >
        <option value={selectedBreed}>{selectedBreed}</option>
        {breeds.map(breed => {
          return <option value={breed}>{breed}</option>
        })}
      </select>
    </>
  )
}

export default BreedsSelect
