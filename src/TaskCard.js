// WAITER
function TaskCard({ task }) {
  const [pileOfDirtyDishes, setPileOfDirtyDishes] = useState(0)
  // let className = ""
  // if(task.important) {
  //   className = "fw-bold"
  // }

  //let className = task.important ? "fw-bold" : ""

  // DISH PERSON
  useEffect(() => {
    //washDishes()
  }, [pileOfDirtyDishes]) // WAIT: Only do this if the pile of dirty dishes has changed since the last time we checked

  //useEffect(CALLBACK, DEPENDENCY_ARRAY)

  useEffect(() => {
    console.log("I should run once")
  }, []) // DO IT ONCE 


  // useEffect(CALLBACK) -> run every time the component renders ( potentially a lot )
  // useEffect(CALLBACK, [something]) -> run every time something changes from last time we checked
  // useEffect(CALLBACK, []) -> run ONCE when the component first loads in (twice in development mode)

  // const cssStyling = {
  //   color: "brown",
  //   marginTop: "10px"
  // }

  return (
    <div className={"alert " + (task.important ? "fw-bold" : "")} style={{ color: "brown", marginTop: "10px" }}>
      { task.text }

      <p className={styles.alert}></p>
    </div>
  )
}