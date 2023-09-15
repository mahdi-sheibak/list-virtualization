import { useState } from "react";
import "./App.css";

const count = 1_000_000;
const items = Array.from({ length: count }, (_, i) => {
  return {
    index: i + 1,
    name: `Movie ${i + 1}`,
  };
});

const itemHeight = 30;
const windowHeight = 500;
const innerHeight = count * itemHeight;

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    Math.floor((scrollTop + windowHeight) / itemHeight),
    count
  );

  const onScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  const displayedItems = items.slice(startIndex, endIndex);

  return (
    <section style={{ textAlign: "center" }}>
      <h2>TODO</h2>
      <div
        className="outerbox"
        style={{
          overflowY: "scroll",
          border: "1px solid red",
          height: windowHeight,
          width: 300,
          margin: "0 auto",
        }}
        onScroll={onScroll}
      >
        <div
          className="innerbox"
          style={{ height: innerHeight, position: "relative" }}
        >
          {displayedItems.map((item) => {
            return (
              <div
                key={item.index}
                style={{
                  height: itemHeight,
                  position: "absolute",
                  width: "100%",
                  top: `${item.index * itemHeight}px`,
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
