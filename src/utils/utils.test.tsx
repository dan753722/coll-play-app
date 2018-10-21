import * as chai from 'chai';
import { IDataItem } from '../components/common';
import {fileSizeConverter, countFiles, countFileSize} from './utils';


describe('test util functions', () => {
    const dataSrc = {
        "data": [
            {
                "type": "folder",
                "name": "neural",
                "children": [
                    {
                        "type": "folder",
                        "name": "cross-platform",
                        "children": [
                            {
                                "type": "file",
                                "name": "new_taiwan_dollar_awesome.pdf",
                                "size": 22723
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "name": "mobile",
                        "children": [
                            {
                                "type": "folder",
                                "name": "virtual",
                                "children": [
                                    {
                                        "type": "file",
                                        "name": "rubber_instruction_set_indigo.htm",
                                        "size": 29534
                                    },
                                    {
                                        "type": "file",
                                        "name": "berkshire.pdf",
                                        "size": 68176
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "name": "back-end",
                                "children": [
                                    {
                                        "type": "folder",
                                        "name": "back-end",
                                        "children": []
                                    },
                                    {
                                        "type": "file",
                                        "name": "electronics_village_eyeballs.shtml",
                                        "size": 12957
                                    },
                                    {
                                        "type": "folder",
                                        "name": "bluetooth",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "type": "file",
                                "name": "licensed_metal_hat.m2v",
                                "size": 59036
                            },
                            {
                                "type": "file",
                                "name": "bedfordshire.jpeg",
                                "size": 57609
                            },
                            {
                                "type": "folder",
                                "name": "auxiliary",
                                "children": [
                                    {
                                        "type": "file",
                                        "name": "rustic.png",
                                        "size": 26420
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "file",
                        "name": "schemas_russian_ruble.gif",
                        "size": 61539
                    },
                    {
                        "type": "folder",
                        "name": "haptic",
                        "children": [
                            {
                                "type": "folder",
                                "name": "redundant",
                                "children": []
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "name": "solid state",
                        "children": [
                            {
                                "type": "folder",
                                "name": "optical",
                                "children": [
                                    {
                                        "type": "folder",
                                        "name": "open-source",
                                        "children": []
                                    },
                                    {
                                        "type": "file",
                                        "name": "navigate.mpeg",
                                        "size": 62368
                                    },
                                    {
                                        "type": "folder",
                                        "name": "neural",
                                        "children": []
                                    },
                                    {
                                        "type": "file",
                                        "name": "http_multi_byte_support.pdf",
                                        "size": 41880
                                    },
                                    {
                                        "type": "file",
                                        "name": "6th_generation_payment.mp4",
                                        "size": 84665
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "file",
                "name": "metal.mp4",
                "size": 33951
            }
        ]
      };
    describe('fileSizeConverter method', () => {
        it('should return 100 B', () => {
            chai.assert.equal('100 B', fileSizeConverter(100));
        });
    });

    describe('countFileSize method', () => {
        it('should find files', () => {
            chai.assert.equal(12, countFiles(dataSrc.data as IDataItem[]));
        });
    });

    describe('countFileSize method', () => {
        it('should count file size', () => {
            chai.assert.equal(560858, countFileSize(dataSrc.data as IDataItem[]));
        });
    });
});
