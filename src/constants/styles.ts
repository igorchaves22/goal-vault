import nunitoBlackFont from "~assets/fonts/nunito/Nunito-Black.woff2";
import nunitoBoldFont from "~assets/fonts/nunito/Nunito-Bold.woff2";
import nunitoExtraBoldFont from "~assets/fonts/nunito/Nunito-ExtraBold.woff2";
import nunitoExtraLightFont from "~assets/fonts/nunito/Nunito-ExtraLight.woff2";
import nunitoLightFont from "~assets/fonts/nunito/Nunito-Light.woff2";
import nunitoMediumFont from "~assets/fonts/nunito/Nunito-Medium.woff2";
import nunitoRegularFont from "~assets/fonts/nunito/Nunito-Regular.woff2";
import nunitoSemiBoldFont from "~assets/fonts/nunito/Nunito-SemiBold.woff2";

export const FONT_FILES: Record<number, string> = {
    200: nunitoExtraLightFont,
    300: nunitoLightFont,
    400: nunitoRegularFont,
    500: nunitoMediumFont,
    600: nunitoSemiBoldFont,
    700: nunitoBoldFont,
    800: nunitoExtraBoldFont,
    900: nunitoBlackFont
};
