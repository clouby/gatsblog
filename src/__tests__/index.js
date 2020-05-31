import React from "react";
import renderer from "react-test-renderer";
import { StaticQuery } from "gatsby";
import Index from "../pages/index";

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: "Macgyver",
        },
      },
    })
  );
});

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index />).toJSON();

    console.log(tree);

    expect(tree).toMatchSnapshot();
  });
});
