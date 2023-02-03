import { Presentation, Slide, Text } from "react-pptx";
import Preview from "react-pptx/preview";

const SummarySlide = ({text}) => {
    return (
        <Slide>
            <Text
                style={{
                x: 1.5,
                y: 0.33,
                w: 6.43,
                h: 0.33,
                fontFace: "Futura",
                fontSize: 16,
                bold: true
                }}
            >
            {text}
            </Text>
        </Slide>
    );
};



const LoadSlides = () => {
    return (
        <Preview>
            <Presentation>
                <SummarySlide text="1" />
            </Presentation>
        </Preview>
    )
}

export default LoadSlides;