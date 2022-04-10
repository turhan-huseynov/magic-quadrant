import { CustomTooltip } from "./tooltip-style";

function Tooltip(props: any) {
    return <CustomTooltip shouldShow={props.shouldShow}>{props.children}</CustomTooltip>;
}

export default Tooltip;
