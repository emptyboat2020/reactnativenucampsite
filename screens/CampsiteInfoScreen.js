import RenderCampsite from '../features/campsites/RenderCampsite';
import "react-native-reanimated";

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    return <RenderCampsite campsite={campsite} />;
};

export default CampsiteInfoScreen;