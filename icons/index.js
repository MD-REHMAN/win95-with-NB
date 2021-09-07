import React from "react";
import Svg, { Defs, Path, Pattern, Use, Image } from "react-native-svg";

export const StartIcon = (props) => {
	return (
		<Svg
			width={16}
			height={16}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			{...props}
		>
			<Path fill="url(#prefix__pattern0)" d="M0 0h16v16H0z" />
			<Defs>
				<Pattern
					id="prefix__pattern0"
					patternContentUnits="objectBoundingBox"
					width={1}
					height={1}
				>
					<Use xlinkHref="#prefix__image0" transform="scale(.0625)" />
				</Pattern>
				<Image
					id="prefix__image0"
					width={16}
					height={16}
					xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAAAAAAD/AAAA/wAAAP///wD///+oQXrmAAAAAXRSTlMAQObYZgAAAAFiS0dEBmFmuH0AAAAHdElNRQfiBhoAOBwkIrLGAAAAWUlEQVQI102Oyw2AQAhE2Q54fu4rHRgbWBMa8GD/rQjrxjgX3gQyg8hfBR2ToGAmdkQVjIPwA2rgxhxQjZSIGQsX0mLl3AHNXxB3TlZ6YD/OQI2W9NlYvg8eYH4JE04wi3cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjZUMDA6NTY6MjgtMDQ6MDCN82qqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI2VDAwOjU2OjI4LTA0OjAw/K7SFgAAAABJRU5ErkJggg=="
				/>
			</Defs>
		</Svg>
	);
};
