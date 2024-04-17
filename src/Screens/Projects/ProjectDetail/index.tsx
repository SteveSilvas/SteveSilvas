import Modal from "../../../Components/Modal";
import { ProjectProps } from "../ProjectsData";
interface IProjectDetail {
    isOpen: boolean;
    onClose: () => void;
    projectSelected: ProjectProps;
}
const ProjectDetail: React.FC<IProjectDetail> = ({ isOpen, onClose, projectSelected }) => {
    const handleCloseClick = () => {
        onClose();
    }

    interface IImageCarousel {
        images: string[];
    }
    const ImageCarousel: React.FC<IImageCarousel> = ({ images }) => {
        return (
            <img src={images[0]}
                style={{
                    width: 'auto',
                    height: '40%', alignItems: 'center'
                }} />
        )
    }

    return (
        <Modal
            style={{ height: '100%', width: '100%' }}
            isOpen={isOpen}
            closeClick={handleCloseClick}>
            <div style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', justifyContent: 'flex-start'
            }}>
                {projectSelected.title}

                <ImageCarousel images={projectSelected.src} />
                <p>{projectSelected.description}</p>
            </div>
        </Modal>
    );
}

export default ProjectDetail;