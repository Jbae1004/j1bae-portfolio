export default function Flex() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        gap: "20px", // distance between children
        padding: "20px", // distance between children and borders
      }}
    >
      <div
        style={{
          // border: "1px solid red",
          flex: 1,
          display: "flex",
          flexDirection: "column",

          gap: "20px", // distance between children
        }}
      >
        <div
          style={{
            border: "1px solid yellow",
            flex: 1,
          }}
        >
          Grandson
        </div>
        <div
          style={{
            border: "1px solid green",
            flex: 1,
          }}
        >
          Granddaughter
        </div>
      </div>
      <div
        style={{
          border: "1px solid blue",
          flex: 1,
        }}
      >
        Image
      </div>
    </div>
  );
}

// LOVE YOU RAAAAAAAAh
