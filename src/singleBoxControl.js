const { __ } = wp.i18n;
const { PanelBody } = wp.components;

import ColorControl from "../util/color-control";
import BackgroundControl from "../util/background-control";

export default function singleBoxControl({
	heading,
	resRequiredProps,
	bgControlName,
	dgColorAttrString,
	lbColorAttrString,
	bdColorAttrString,
}) {
	const { setAttributes, attributes } = resRequiredProps;
	return (
		<>
			<h3
				style={{
					fontSize: "15px",
					color: "#444",
					margin: "0 0 10px 0",
				}}
			>
				{heading}
			</h3>
			<PanelBody
				title={__("Background")}
				// initialOpen={false}
			>
				<BackgroundControl
					noTransition
					controlName={bgControlName}
					resRequiredProps={resRequiredProps}
					noOverlay
					noMainBgi
					// noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
				/>
			</PanelBody>

			<ColorControl
				label={__("Digit Color")}
				color={attributes[`${dgColorAttrString}`]}
				onChange={(dgColor) =>
					setAttributes({ [`${dgColorAttrString}`]: dgColor })
				}
			/>

			<ColorControl
				label={__("Label Color")}
				color={attributes[`${lbColorAttrString}`]}
				onChange={(lbColor) =>
					setAttributes({ [`${lbColorAttrString}`]: lbColor })
				}
			/>

			{attributes.boxsBds_borderStyle !== "none" && (
				<ColorControl
					label={__("Border Color")}
					color={attributes[`${bdColorAttrString}`]}
					onChange={(bdColor) =>
						setAttributes({ [`${bdColorAttrString}`]: bdColor })
					}
				/>
			)}

			<hr />
		</>
	);
}
