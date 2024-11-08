import MyButton from "@/components/MyButton";

function Components() {
  return (
    <div className="p-4">
      <MyButton onClick={() => console.log('parent clicked')}>
        <h2>This heading will be shown</h2>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            First button - will be clickable
          </button>
        </div>
        <p>This paragraph will be shown</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Second button - will be disabled and grayed out
        </button>
        <div>Some more content</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Third button - will be disabled and grayed out
        </button>
      </MyButton>
    </div>
  );
}

export default Components; 