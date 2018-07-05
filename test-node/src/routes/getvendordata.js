import { access } from '@elementary/proper';
import { promisify } from 'util';

import {relation} from '../relations/relations.js'

export default async (req, res) => {
	 
	const result = relation(req, res);
	const VendorCityModal = result.VendorCityModal;
	const VendorMasterModal = result.VendorMasterModal;

	const vendorcity = await VendorCityModal
	.findAll({
		attributes: ['id'],
		where:{id:2},
	    include:[{
	    	model: VendorMasterModal,
	    	required: true,
	    	attributes:['id', 'image_id'],
	    	raw: true,
	    }],
	    raw : true,
	}).then(function(result){
			console.log(result);
	}).catch(console.error)
	};



