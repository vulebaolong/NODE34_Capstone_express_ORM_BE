import { helper } from "../helpers/helper.js";
import { imageService } from "../services/imageService.js";

export const imageController = {
    getList: async (req, res, next) => {
        try {
            const dataRes = await imageService.getList();

            helper.responses(res, 200, dataRes);
        } catch (error) {
            next(error);
        }
    },

    search: async (req, res, next) => {
        try {
            const { searchText } = req.query;

            const dataRes = await imageService.search(searchText);

            helper.responses(res, 200, dataRes);
        } catch (error) {
            next(error);
        }
    },

    getImageInfo: async (req, res, next) => {
        try {
            const { imageId } = req.params;

            const dataRes = await imageService.getImageInfo(+imageId);

            helper.responses(res, 200, dataRes);
        } catch (error) {
            next(error);
        }
    },

    createComment: async (req, res, next) => {
        try {
            const { imageId, content } = req.body;

            const user = req.user;

            const dataRes = await imageService.createComment({ imageId: +imageId, content, user });

            helper.responses(res, 200, dataRes);
        } catch (error) {
            next(error);
        }
    },

    getComment: async (req, res, next) => {
        try {
            const { imageId } = req.params;

            const dataRes = await imageService.getComment(+imageId);

            helper.responses(res, 200, dataRes);
        } catch (error) {
            next(error);
        }
    },

    saveAndUnSave: async (req, res, next) => {
        try {
            const { imageId } = req.params;

            const user = req.user;

            const dataRes = await imageService.saveAndUnSave({ imageId: +imageId, user });

            helper.responses(res, 200, dataRes);
        } catch (error) {
            next(error);
        }
    },

    getSave: async (req, res, next) => {
        try {
            const { imageId } = req.params;

            const user = req.user;

            const dataRes = await imageService.getSave({ imageId: +imageId, user });

            helper.responses(res, 200, dataRes);
        } catch (error) {
            next(error);
        }
    },

    deleteImage: async (req, res, next) => {
        try {
            const { imageId } = req.params;

            const user = req.user;

            const dataRes = await imageService.deleteImage({ imageId: +imageId, user });

            helper.responses(res, 200, dataRes);
        } catch (error) {
            next(error);
        }
    },
};
