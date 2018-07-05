import { access } from '@elementary/proper';
import { promisify } from 'util';

import member from '../models/member'
import imageInfo from '../models/imageInfo'
import VendorCity from '../models/vendorCity'
import VendorStats from '../models/vendorStats'
import filterOption from '../models/filterOption'
import VendorMaster from '../models/vendorMaster'
import VendorCategory from '../models/vendorCategory'
import VendorActiveStatus from '../models/vendorActiveStatus'

export const relation = function(req, res) {
	const response = res.create();
	
	const memberModal = member(response.sequelize);
	const imageInfoModal = imageInfo(response.sequelize);
	const VendorCityModal = VendorCity(response.sequelize);
	const VendorStatsModal = vendorStats(response.sequelize);
	const filterOptionModal = filterOption(response.sequelize);
	const VendorMasterModal = VendorMaster(response.sequelize);
	const vendorCategoryModal = VendorCategory(response.sequelize);
	const vendorActiveStatusModal = VendorActiveStatus(response.sequelize);

	VendorCityModal.belongsTo(VendorMasterModal, {foreignKey: 'vendor_id', targetKey: 'id'});
	
	return {VendorCityModal, VendorMasterModal};

	};

//export {VendorCityModal, VendorMasterModal};


/*
import member from '../models/member'
import imageInfo from '../models/imageInfo'
import VendorCity from '../models/vendorCity'
import VendorStats from '../models/vendorStats'
import filterOption from '../models/filterOption'
import VendorMaster from '../models/vendorMaster'
import VendorCategory from '../models/vendorCategory'
import VendorActiveStatus from '../models/vendorActiveStatus'


async (req, res) => {
	const response = res.create();
	
	const memberModal = member(response.sequelize);
	const imageInfoModal = imageInfo(response.sequelize);
	const VendorCityModal = VendorCity(response.sequelize);
	const VendorStatsModal = vendorStats(response.sequelize);
	const filterOptionModal = filterOption(response.sequelize);
	const VendorMasterModal = VendorMaster(response.sequelize);
	const vendorCategoryModal = VendorCategory(response.sequelize);
	const vendorActiveStatusModal = VendorActiveStatus(response.sequelize);

	VendorCityModal.belongsTo(VendorMasterModal, {foreignKey: 'vendor_id', targetKey: 'id'});

	};

export {VendorCityModal, VendorMasterModal};
*/