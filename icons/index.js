import { createIcon } from "native-base";
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

export const MoonIcon = createIcon({
	viewBox: "0 0 24 24",
	d: "M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",
});
