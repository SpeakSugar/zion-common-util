export class StringUtil {

    /**
     * Example: "./drivers/win" = StringUtil.substringToLastChar("./drivers/win/chromedriver", "/")
     * @param origin
     * @param char
     */
    public static substringToLastChar(origin: string, char: string): string {
        return origin.substring(0, origin.lastIndexOf(char));
    }

    public static substringToFirstChar(origin: string, char: string) {
        return origin.substring(0, origin.indexOf(char));
    }

    /**
     * Example: "chromedriver" = StringUtil.substringFromLastChar("./drivers/win/chromedriver", "/")
     * @param origin
     * @param char
     */
    public static substringFromLastChar(origin: string, char: string): string {
        return origin.substring(origin.lastIndexOf(char) + 1, origin.length);
    }

    public static substringFromFirstChar(origin: string, char: string): string {
        return origin.substring(origin.indexOf(char) + 1, origin.length);
    }

}
