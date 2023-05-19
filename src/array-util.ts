import * as _ from "lodash";

export class ArrayUtil {

    public static deDuplicateX(arr: object[], props: string[]): object[] {
        const groupedObjs = _.groupBy(arr, obj => {
            const pickedProps = _.pick(obj, props);
            return JSON.stringify(pickedProps);
        });
        return _.filter(groupedObjs, group => group.length == 1).flat();
    }

}
