import { useState } from "react";

export default function Panel({title, children, collapsible}) {

  const [collapse, setCollapse] = useState(collapsible);

  function CollapseFunctionality() {
    return (
      <div>
        {collapse ? (<button onClick={() => {
        setCollapse(!collapse);
        }}>Visa</button>) : (<div><button onClick={() => {
          setCollapse(!collapse);
        }}>Mindre</button>{children}</div>)}
      </div>
    )
  }

  return (
    <div>
      <h2>{title}</h2>
      {collapsible ? ( // if collapsible (prop) is true 
        <CollapseFunctionality></CollapseFunctionality>

      ): ( // if collapsible (prop) is undefined or is false we only show the children-prop
        children // inga måsvingar här!
      )}
      
    </div>
  );
}
