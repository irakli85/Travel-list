export default function Stats({items}) {
    if(!items.length){
      return(
        <footer className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </footer>
      )
    }
  
    const numItems = items.length
    const numPacked = items.filter(i => i.packed).length
    const percentage = Math.round((numPacked/numItems) * 100)
  
    
    return (
          <footer className="stats">
            <em>
              {
              percentage === 100 ? 'Yoo got everything to go ✈️'
              : `👜 You have ${numItems} items on your list, and you alredy packed ${numPacked} (${percentage}%)`
            }
            </em>
          </footer>
          )
  }