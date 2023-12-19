import React from "react";
import { Pre, Line, LineNo, LineContent } from "./styles";
import { themes, Highlight } from "prism-react-renderer";

const WithLineNumbers = ({ Code }) => (
  <Highlight theme={themes.shadesOfPurple} code={Code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default WithLineNumbers;
